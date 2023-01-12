import { useState } from "react";
import { toast } from "react-toastify";
import { checkOutApi } from "../../../services/player";
import { useRouter } from "next/router";

export default function CheckoutConfirmation() {
  const [checkBox, setCheckbox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    if (!checkBox) {
      return toast.error("Silahkan transfer terlebih daulu", {
        theme: "colored",
      });
    }
    const dataItemFromLocal = localStorage.getItem("data-item");
    const dataPurchaseFromLocal = localStorage.getItem("data-topup");
    const dataItemLocal = JSON.parse(dataItemFromLocal!);
    const dataPurchaseLocal = JSON.parse(dataPurchaseFromLocal!);

    const data = {
      voucher: dataItemLocal.voucher._id,
      nominal: dataPurchaseLocal.nominalItem._id,
      bank: dataPurchaseLocal.paymentItem.bank._id,
      payment: dataPurchaseLocal.paymentItem.payment._id,
      name: dataPurchaseLocal.bankAccountName,
      accountUser: dataPurchaseLocal.verifyId,
    };

    const result = await checkOutApi(data);
    if (result.error) {
      return toast.error(result.message, { theme: "colored" });
    }
    toast.success("Transaksi diterima, tunggu yaaa", { theme: "colored" });
    localStorage.removeItem("data-item");
    localStorage.removeItem("data-topup");
    router.push("/complete-checkout");
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckbox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
          role="button"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
