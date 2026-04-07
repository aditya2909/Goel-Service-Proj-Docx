import React from "react";

const Work = ({ data, product }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans leading-relaxed text-gray-800">
      {/* Title */}
      <h2 className="text-center text-xl font-semibold underline mb-10">
        Work Completion Certificate
      </h2>

      {/* Project Section */}
      <table className="border-spacing-y-3 border-separate">
        <tbody>
          <tr>
            <td className="flex items-start ">Project</td>
            <td>
              <div className="flex ">
                <div className="mr-4">:</div>
                <div>
                  <p className="font-bold">{data.projName}</p>
                  <p>{data.projLocation}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="mt-2">
            <td className="flex items-start w-30">Owner / Client</td>
            <td>
              <div className="flex ">
                <div className="mr-4">:</div>
                <div>
                  <p className="font-bold">{data.clientName}</p>
                  <p>{data.clientLocation}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Paragraph 1 */}
      <p className="mt-6 text-justify">
        This Certificate of Substantial Completion applies to all work under the
        Contract documents for the
        <span className="font-bold">
          {" "}
          Supply & Installation of Diesel Generator {product?.prodName}
        </span>
        KVA works awarded to the contractor vide{" "}
        <span className="font-bold">Goel Power Engineers</span>. Against work
        order no. <span className="font-bold">({data.orderNo})</span>
      </p>

      {/* Paragraph 2 */}
      <p className="mt-6 text-justify">
        The work performed under this Contract to which this Certificate applies
        as specified above has been inspected by authorized representatives of
        the Client & Project Manager and is hereby declared to be substantially
        complete in accordance with the Contract documents. The Date of
        Substantial Completion is therefore established as{" "}
        <span className="font-semibold">
          {formatDate(data.dateOfSubstantial)}
        </span>
        , so that the Client may occupy or utilize the entire works or portion
        noted above for its intended purpose. This date is also the date of
        commencement of all warranties as required in the Contract documents.
      </p>

      {/* Signature Section */}
      <div className="flex justify-between mt-16">
        <div>
          <p className="font-semibold mb-4">GOEL POWER ENG. Representative:</p>
          <p className="mb-2">Sign:</p>
          <p>Date:</p>
        </div>

        <div>
          <p className="font-semibold mb-4">NARANG REALTY Representative:</p>
          <p className="mb-2">Sign:</p>
          <p>Date:</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
