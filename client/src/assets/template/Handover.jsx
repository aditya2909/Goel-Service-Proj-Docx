const Handover = ({ data, product }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="text-sm leading-6">
      <h1 className="text-center text-xl font-bold mb-4">
        HANDOVER CERTIFICATE
      </h1>

      <p>
        <strong>TO,</strong>
      </p>
      <div className="ml-6 font-semibold">
        <p>M/s {data.clientName}</p>
        <p>{data.projLocation}</p>
      </div>

      <p className="mt-4">
        Sub: Handing over of {product?.prodName}KVA DG set at your site{" "}
        <span className="font-semibold">
          {data.projName}, {data.projLocation}
        </span>
      </p>

      <p className="mt-6">Dear Sir/Madam,</p>

      <p className="mt-2">
        This is with reference to your order for {product?.prodName}KVA DG set.
      </p>

      <p className="mt-2">
        We have completed and checked the Installation of systems and found to
        be in order for handover.
      </p>

      <p className="mt-2">
        These units are being now handed over for your beneficial use effective
        from
      </p>

      <p className="mt-2">Details of systems being handed over as under.</p>

      <p className="mt-2">Number of system – ({product?.prodName}KVA DG set)</p>

      <p className="mt-2">Location – Ground floor Open space.</p>

      <p className="mt-2">
        We have given complete information about systems and training about its
        operation to your representative.
      </p>

      <p className="mt-2">
        We have also handed over this instruction manual / Escalation Matrix /
        Do’s and Don’ts for use of the systems in safe condition.
      </p>

      <p className="mt-2">
        As per Contract the Warranty of the above systems starts effectively
        i.e.{" "}
        <span className="font-semibold">
          {formatDate(data.warrantyStartDate)}
        </span>{" "}
        and shall end on{" "}
        <span className="font-semibold">
          {formatDate(data.warrantyEndDate)}
        </span>
        .
      </p>

      <p className="mt-2">Thanking you and assuring you our best services.</p>

      <div className="flex justify-between mt-10">
        <div>
          <p>For GOEL POWER ENGINEERS LLP</p>
          <p className="mt-4">Authorized Signatory</p>
          <p className="mt-4">Name: </p>
          <p className="mt-4">Mobile No. </p>
          <p className="mt-4">Date: </p>
        </div>

        <div>
          <p>Accepted by Client</p>
          <p className="mt-4">Authorized Signatory</p>
          <p className="mt-4">Name: </p>
          <p className="mt-4">Mobile No. </p>
          <p className="mt-4">Date: </p>
        </div>
      </div>
    </div>
  );
};

export default Handover;
