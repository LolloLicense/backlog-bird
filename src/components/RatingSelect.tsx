type RatingSelectProps = {
  value: number | null;
  onChange: (value: number) => void;
};

const RatingSelect = ({ value, onChange }: RatingSelectProps) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <fieldset>
      <legend>Rating</legend>

      {ratings.map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            name="rating"
            value={rating}
            checked={value === rating}
            onChange={() => onChange(rating)}
          />

          {rating}
        </label>
      ))}
    </fieldset>
  );
};

export default RatingSelect;
