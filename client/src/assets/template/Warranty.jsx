import React from "react";

const Warranty = ({ data, product }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="text-sm leading-6">
      <p>
        <strong>TO,</strong>
      </p>
      <div className="ml-6 text-lg font-semibold">
        <p>M/s {data.clientName}</p>
        <p className="text-sm">{data.projLocation}</p>
      </div>
      <h1 className="text-center text-xl font-bold underline mt-6 mb-14">
        WARRANTY CERTIFICATE
      </h1>

      <p className="mt-4">
        This is to certify that{" "}
        <span className="font-semibold"> {product?.prodName}kVA </span>{" "}
        ‘KIRLOSKAR DG set supplied at your factory, vide Engine serial no.{" "}
        <span className="font-semibold">{data?.engineNo}</span> & Alternator no.
        <span className="font-semibold"> {data?.alternatorNo}</span> Battery &
        control Panel which carry the warranty for Two years for KOEL Engine
        subject to use of K-Oil & filters sourced through authorized service
        dealer for any inherent manufacturing defect as per manufacturer's
        norms.
      </p>

      <p className="mt-6 font-semibold">
        The warranty starts from the date of{" "}
        {formatDate(data?.warrantyStartDate)} To{" "}
        {formatDate(data?.warrantyEndDate)}
      </p>
      <p className="mt-6">
        All the after sales services will be provided by Kirloskar’s Service
        Network as per the Policy & norms of M/s. ‘KIRLOSKAR Oil Engine Limited.
      </p>
      <p className="mt-10">Thanking you,</p>
      <p className="mt-8">Yours faithfully,</p>
    </div>
  );
};

export default Warranty;
