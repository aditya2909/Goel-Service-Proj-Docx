import React from "react";

const Scope = ({ data, product }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const otherformatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  const inputformatDate = (dateString) => {
    if (!dateString) return "";
    dateString = dateString.split("T")[0];
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <div className="text-sm leading-6">
        <h1 className="text-center font-bold mb-4">SCOPE OF WORK</h1>
        <p>
          <strong>TO,</strong>
        </p>
        <div className="ml-6 font-semibold">
          <p>M/s {data.clientName}</p>
          <p>{data.projLocation}</p>
        </div>
        <p className="mt-24">Dear Sir,</p>
        <p className="mt-4">
          Sub: Supply, Installation, Testing and commissioning of{" "}
          {product?.prodName}KVA DG Set and allied work for{" "}
          <span className="font-bold">
            {data.projName}, {data.projLocation}
          </span>
        </p>
        <p className="mt-2">
          Ref.: Declaration of scope completion against work order no. -{" "}
          <span className="font-bold">({data.orderNo})</span>
        </p>
        <p>
          We have successfully Supplied, Installed, Tested and Commissioned
          58.5KVA DG set completed our works against work order no.{" "}
          <span className="font-bold">({data.orderNo})</span>
          &nbsp; &nbsp; &nbsp; &nbsp; Dated:{" "}
          <span className="font-bold">{formatDate(data?.orderDate)}</span>
        </p>
        <p className="mt-20">Thanking you,</p>
        <p className="mt-10">Yours faithfully,</p>
      </div>

      <div className="text-sm leading-6">
        <h1 className="text-center font-bold mb-4">PERFORMANCE GUARANTEE</h1>

        <p>
          <strong>TO,</strong>
        </p>
        <div className="ml-6 font-semibold">
          <p>M/s {data.clientName}</p>
          <p>{data.projLocation}</p>
        </div>

        <p className="mt-20">Dear Sir,</p>
        <p className="mt-4">
          Sub: Supply, Installation, Testing and commissioning of{" "}
          {product?.prodName}KVA DG Set and allied work for{" "}
          <span className="font-bold">
            {data.projName}, {data.projLocation}
          </span>
        </p>

        <div className="mt-2">
          <div>Ref:</div>
          <div className="ml-2">
            <p>
              (1) Performance Guarantee for DLP period. (
              <span className="font-bold">
                {otherformatDate(data?.warrantyStartDate)}
              </span>{" "}
              TO
              <span className="font-bold">
                {otherformatDate(data?.warrantyEndDate)}
              </span>
              )
            </p>
            <p>
              (2) Order No. ({data.orderNo}) &nbsp; &nbsp; &nbsp; &nbsp; Dated -{" "}
              {formatDate(data?.orderDate)}
            </p>
          </div>
        </div>

        <p className="mt-2">
          We have completed the said work for DG set supply and installation
          work on{" "}
          <span className="font-bold">
            {inputformatDate(data?.dateOfSubstantial)}
          </span>{" "}
          as per specification with the relevant provisions & norms mentioned in
          the work order.
        </p>

        <p className="mt-2">
          We hereby assure you that if there is any defect in our material or
          any quality issue in workmanship we hereby take responsibility till 24
          months from date of commissioning{" "}
          <span className="font-bold">
            {inputformatDate(data?.installationDate)}
          </span>{" "}
          of work and will rectify free of cost.
        </p>

        <p className="mt-20">Thanking you,</p>
        <p className="mt-10">Yours faithfully,</p>
      </div>
    </>
  );
};

export default Scope;
