import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CheckoutDetail() {
  const [purchase, setPurchase] = useState({
    verifyId: "",
    bankAccountName: "",
    nominalItem: {
      coinName: "",
      coinQuantity: 0,
      price: 0,
      _id: "",
    },
    paymentItem: {
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
      payment: {
        type: "",
        _id: "",
      },
    },
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-topup");
    const dataPurchaseLocal = JSON.parse(dataFromLocal!);
    setPurchase(dataPurchaseLocal);
  }, []);

  let tax = (10 / 100) * purchase.nominalItem.price;
  let totalPrice = purchase.nominalItem.price + tax;
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{purchase.verifyId}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {purchase.nominalItem.coinQuantity} {purchase.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={purchase.nominalItem.price}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={tax}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={totalPrice}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{purchase.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {purchase.paymentItem.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {purchase.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {purchase.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {purchase.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
