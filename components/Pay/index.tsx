// @ts-nocheck

"use client";
import {
  MiniKit,
  tokenToDecimals,
  Tokens,
  PayCommandInput,
} from "@worldcoin/minikit-js";

const sendPayment = async (address: string, amount: any) => {
  try {
    const res = await fetch(`/api/initiate-payment`, {
      method: "POST",
    });
    console.log(`res: ${JSON.stringify(res, null, 2)}`);
    const { id } = await res.json();

    console.log(id);

    const payload: PayCommandInput = {
      reference: id,
      to: address,
      tokens: [
        {
          symbol: Tokens.USDCE,
          token_amount: tokenToDecimals(amount, Tokens.USDCE).toString(),
        },
      ],
      description: "Watch this is a test",
    };
    if (MiniKit.isInstalled()) {
      return await MiniKit.commandsAsync.pay(payload);
    }
    return null;
  } catch (error: unknown) {
    console.log("Error sending payment", error);
    return null;
  }
};

export const handlePay = async (address: string, amount: any) => {
  if (!MiniKit.isInstalled()) {
    console.error("MiniKit is not installed");
    return;
  }
  const sendPaymentResponse = await sendPayment(address, amount);
  const response = sendPaymentResponse?.finalPayload;
  if (!response) {
    return;
  }

  if (response.status == "success") {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/confirm-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: response }),
    });
    const payment = await res.json();
    if (payment.success) {
      // Congrats your payment was successful!
      console.log("SUCCESS!");
    } else {
      // Payment failed
      console.log("FAILED!");
    }
  }
};

export const PayBlock = () => {
  return (
    <button className="bg-blue-500 p-4" onClick={handlePay}>
      Pay
    </button>
  );
};
