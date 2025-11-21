import { FaCcMastercard, FaCcPaypal, FaGooglePay } from "react-icons/fa6"
import { SiKlarna } from "react-icons/si"
import SwishLogo from "../../../assets/swish-icon.svg"
import { useState } from "react"

export const PaymentCard = () => {
  // State to hold selected payment method with debit as default value
  const [selectedPayment, setSelectedPayment] = useState<string>("debit");

  // Function to handle selection
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.id)
  };

  return (
    <div className="border border-zinc-800 rounded-2xl px-4 py-6">

      <div className="relative flex justify-between border-b border-zinc-800 pb-6">
        <div className="flex gap-2 items-center">
          <FaCcMastercard className="size-5"/>
          <label htmlFor="debit">Pay with Debit</label>
        </div>
        <div className="relative">
          <input 
            id="debit" 
            type="radio"
            checked={selectedPayment === "debit"}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <FaCcPaypal className="size-5"/>
          <label htmlFor="paypal">Pay with PayPal</label>
        </div>
        <input 
          id="paypal" 
          type="radio"
          checked={selectedPayment === "paypal"}
          onChange={handleChange} />
      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <img src={SwishLogo} alt="swish logo" className="size-5"/>
          <label htmlFor="swish">Pay with Swish</label>
        </div>
         <input 
          id="swish" 
          type="radio" 
          checked={selectedPayment === "swish"}
          onChange={handleChange}/>
      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <FaGooglePay className="size-5"/>
          <label htmlFor="google_pay">Pay with Google Pay</label>
        </div>
        <input 
          id="google_pay" 
          type="radio" 
          checked={selectedPayment === "google_pay"}
          onChange={handleChange}/>
      </div>

      <div className="flex justify-between pt-6">
        <div className="flex gap-2 items-center">
          <SiKlarna className="size-5"/>
          <label htmlFor="klarna">Pay with Klarna</label>
        </div>
         <input 
          id="klarna" 
          type="radio"
          checked={selectedPayment === "klarna"}
          onChange={handleChange} />
      </div>
    </div>
  )
}