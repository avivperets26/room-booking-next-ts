import {
  formatPhoneNumber,
  formatSalary,
  validateField,
} from "@/helpers/Helpers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, selectFormData } from "../../store/formSlice";
import { FormData, FormErrors } from "../../types/formType";
import Button from "../Button/Button";
interface BackgroundInfoProps {
  onNext: () => void;
}

export const BackgroundInfo = ({ onNext }: BackgroundInfoProps) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  useEffect(() => {
    // Check if all fields are valid
    const isValid =
      Object.values(errors).every((error) => !error) &&
      Object.values(formData).every((value) => !!value.trim());
    setIsFormValid(isValid);
  }, [errors]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "salary") {
      formattedValue = formatSalary(value);
    } else if (name === "phoneNumber") {
      formattedValue = formatPhoneNumber(value);
    }

    const error = validateField(name, formattedValue);
    setErrors({ ...errors, [name]: error });

    dispatch(
      updateFormData({
        ...formData,
        [name]: formattedValue,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = Object.keys(formData).reduce<FormErrors>(
      (acc, fieldName) => {
        const error = validateField(
          fieldName,
          formData[fieldName as keyof FormData]
        );
        if (error) acc[fieldName] = error;
        return acc;
      },
      {}
    );

    if (Object.keys(formErrors).length === 0) {
      onNext();
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    // Navigate to the homepage or perform any other desired action
    window.location.href = "/";
  };

  return (
    <div className="background-info">
      <h2>Background Information</h2>
      <div className="info-section">
        <form className="background-details" onSubmit={handleSubmit}>
          <p>*Please provide your background information.</p>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div>
            <label>Profession:</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
            {errors.profession && <p className="error">{errors.profession}</p>}
          </div>
          <div>
            <label>Salary (Annual Gross):</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
            {errors.salary && <p className="error">{errors.salary}</p>}
          </div>
          <div>
            <label>Pets (if any):</label>
            <input
              type="text"
              name="pets"
              value={formData.pets}
              onChange={handleChange}
              placeholder="None, Dog, Cat, etc."
            />
            {errors.pets && <p className="error">{errors.pets}</p>}
          </div>
          <div>
            <label>Marital Status:</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="none">None</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div>
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
            {errors.nationality && (
              <p className="error">{errors.nationality}</p>
            )}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label>Passport ID:</label>
            <input
              type="text"
              name="passportId"
              value={formData.passportId}
              onChange={handleChange}
            />
            {errors.passportId && <p className="error">{errors.passportId}</p>}
          </div>
        </form>
        <div className="actions">
          <Button type="cancel" onClick={handleCancel} />
          <div className="next-previous-buttons">
            <Button type="next" onClick={onNext} disabled={!isFormValid} />
          </div>
        </div>
      </div>
    </div>
  );
};
