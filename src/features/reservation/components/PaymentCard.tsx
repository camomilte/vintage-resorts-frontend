import { FaCcMastercard, FaCcPaypal, FaGooglePay } from "react-icons/fa6"
import { SiKlarna } from "react-icons/si"
import SwishLogo from "../../../assets/swish-icon.svg"
import { useState } from "react"

export const PaymentCard = () => {
  // State to hold selected payment method with Debit as default value
  const [selectedPayment, setSelectedPayment] = useState<string>("Debit");

  // Function to handle selection
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.id)
  };

  return (
    <div className="border border-zinc-800 rounded-2xl px-4 py-6">

      <div className="relative flex justify-between border-b border-zinc-800 pb-6">
        <div className="flex gap-2 items-center">
          <FaCcMastercard className="size-5"/>
          <label htmlFor="Debit">Pay with Debit</label>
        </div>
        <div className="relative">
          <input 
            id="Debit" 
            type="radio"
            checked={selectedPayment === "Debit"}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <FaCcPaypal className="size-5"/>
          <label htmlFor="PayPal">Pay with PayPal</label>
        </div>
        <input 
          id="PayPal" 
          type="radio"
          checked={selectedPayment === "PayPal"}
          onChange={handleChange} />
      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <img src={SwishLogo} alt="Swish logo" className="size-5"/>
          <label htmlFor="Swish">Pay with Swish</label>
        </div>
         <input 
          id="Swish" 
          type="radio" 
          checked={selectedPayment === "Swish"}
          onChange={handleChange}/>
      </div>

      <div className="flex justify-between border-b border-zinc-800 py-6">
        <div className="flex gap-2 items-center">
          <FaGooglePay className="size-5"/>
          <label htmlFor="Google_Pay">Pay with Google Pay</label>
        </div>
        <input 
          id="Google_Pay" 
          type="radio" 
          checked={selectedPayment === "Google_Pay"}
          onChange={handleChange}/>
      </div>

      <div className="flex justify-between pt-6">
        <div className="flex gap-2 items-center">
          <SiKlarna className="size-5"/>
          <label htmlFor="Klarna">Pay with Klarna</label>
        </div>
         <input 
          id="Klarna" 
          type="radio"
          checked={selectedPayment === "Klarna"}
          onChange={handleChange} />
      </div>
    </div>
  )
}