export default function Step5Address({ register, errors }) {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium md:text-base text-[12px] pb-1">
            Street Address
          </span>
        </label>
        <input
          type="text"
          {...register("MailingAddress_NumberAndStreet[0]", {
            required: "Street Address is required",
          })}
          className="input input-bordered w-full py-5"
          placeholder="No. & Street"
        />
        {errors.MailingAddress_NumberAndStreet?.[0] && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.MailingAddress_NumberAndStreet[0].message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium md:text-base text-[12px] pb-1">City</span>
        </label>
        <input
          type="text"
          {...register("MailingAddress_City[0]", {
            required: "City is required",
          })}
          className="input input-bordered w-full py-5"
          placeholder="City"
        />
        {errors.MailingAddress_City?.[0] && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.MailingAddress_City[0].message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium md:text-base text-[12px] pb-1">State</span>
        </label>
        <input
          type="text"
          maxLength="2"
          {...register("MailingAddress_StateOrProvince[0]", {
            required: "State is required",
          })}
          className="input input-bordered w-full py-5"
          placeholder="State"
        />
        {errors.MailingAddress_StateOrProvince?.[0] && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.MailingAddress_StateOrProvince[0].message}
            </span>
          </label>
        )}
      </div>

      <div className="flex items-center jusbify-between gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium md:text-base text-[12px] pb-1">
              ZIP Code (First 5 digits)
            </span>
          </label>
          <input
            type="text"
            maxLength="5"
            {...register("MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]", {
              required: "ZIP Code is required",
              pattern: {
                value: /^\d{5}$/,
                message: "Must be 5 digits",
              },
            })}
            className="input input-bordered w-full py-5"
            placeholder="12345"
          />
          {errors.MailingAddress_ZIPOrPostalCode_FirstFiveNumbers?.[0] && (
            <label className="label">
              <span className="label-text-alt text-error">
                {
                  errors.MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]
                    .message
                }
              </span>
            </label>
          )}
        </div>

      </div>
    </div>
  );
}
