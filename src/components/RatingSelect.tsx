type RatingSelectProps = {
  value: number | null;
  onChange: (value: number) => void;
};

const RatingSelect = ({ value, onChange }: RatingSelectProps) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <fieldset className="flex gap-2">
      <legend className=" uppercase text-2xl font-dazzle">
        Set your Rating
      </legend>

      {ratings.map((rating) => (
        <label key={rating} className="cursor-pointer pt-4">
          <input
            type="radio"
            name="rating"
            value={rating}
            checked={value === rating}
            onChange={() => onChange(rating)}
            className="sr-only"
          />

          <img
            src={
              value !== null && rating <= value
                ? "/icons/star-filled.svg"
                : "/icons/star-outlined.svg"
            }
            alt=""
            className="w-8"
          />
        </label>
      ))}
    </fieldset>
  );
};

export default RatingSelect;
