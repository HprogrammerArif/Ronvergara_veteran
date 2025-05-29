export default function Step7CurrentStatus({ register, errors }) {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base pb-1">
            Are You Currently on Any Active Duty Federal Orders?
          </span>
        </label>
        <select
          {...register("activeDutyOrders", {
            required: "This field is required",
          })}
          className="select select-bordered w-full uppercase"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.activeDutyOrders && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.activeDutyOrders.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base pb-1">
            VA Direct Deposit Setup?
          </span>
        </label>
        <select
          {...register("vaDirectDeposit", {
            required: "This field is required",
          })}
          className="select select-bordered w-full uppercase"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.vaDirectDeposit && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.vaDirectDeposit.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base pb-1">
            Are you currently homeless or at risk of becoming homeless?
          </span>
        </label>
        <select
          {...register("vaHealthCare", {
            required: "This field is required",
          })}
          className="select select-bordered w-full uppercase"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.vaHealthCare && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.vaHealthCare.message}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
