import { useState } from "react";
import {
  BankTypes,
  NominalTypes,
  PaymentTypes,
} from "../../../services/dataTypes";
import NominalItem from "./NominalItem";
import PaymentMethod from "./PaymentMethod";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface TopupFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm(props: TopupFormProps) {
  const [verifyId, setVerifyId] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});

  const router = useRouter();
  const { nominals, payments } = props;

  const onChangeNominal = (data: NominalTypes) => {
    setNominalItem(data);
  };
  const onChangePayment = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyId === "" ||
      bankAccountName === "" ||
      JSON.stringify(nominalItem) === "{}" ||
      JSON.stringify(paymentItem) === "{}"
    ) {
      return toast.error("Semua data wajib diisi", {
        theme: "colored",
      });
    }
    const data = {
      verifyId,
      bankAccountName,
      nominalItem,
      paymentItem,
    };
    localStorage.setItem("data-topup", JSON.stringify(data));
    router.push("/checkout");
  };
  return (
    <>
      <form action="./checkout.html" method="POST">
        <div className="pt-md-50 pt-30">
          <div className="">
            <label
              htmlFor="ID"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Verify ID
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              aria-describedby="verifyID"
              placeholder="Enter your ID"
              value={verifyId}
              onChange={(event) => setVerifyId(event.target.value)}
            />
          </div>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Nominal Top Up
          </p>
          <div className="row justify-content-between">
            {nominals.map((nominal) => {
              return (
                <NominalItem
                  key={nominal._id}
                  _id={nominal._id}
                  coinName={nominal.coinName}
                  coinQuantity={nominal.coinQuantity}
                  price={nominal.price}
                  onChange={() => onChangeNominal(nominal)}
                />
              );
            })}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </div>
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Payment Method
          </p>
          <fieldset id="paymentMethod">
            <div className="row justify-content-between">
              {payments.map((payment) => {
                return payment.banks.map((bank) => (
                  <PaymentMethod
                    key={bank._id}
                    bankID={bank._id}
                    type={payment.type}
                    name={bank.bankName}
                    onChange={() => onChangePayment(payment, bank)}
                  />
                ));
              })}
              {/* {payments.map((payment) => payment.banks.map((bank) => 
                <PaymentMethod
                bankID={bank._id}
                type={payment.type}
                name={bank.bankName}
                />;
                );
            )} */}
              <div className="col-lg-4 col-sm-6"></div>
            </div>
          </fieldset>
        </div>
        <div className="pb-50">
          <label
            htmlFor="bankAccount"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Bank Account Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="bankAccount"
            name="bankAccount"
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
            value={bankAccountName}
            onChange={(event) => setBankAccountName(event.target.value)}
          />
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
          <button
            type="button"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
