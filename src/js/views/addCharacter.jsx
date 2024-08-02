import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

export const AddCharacter = () => {
	const { store, actions } = useContext(Context);

	// FORMIK Y YUP PARA FORMULARIO DE NUEVO PERSONAJE
	const formik = useFormik({
		initialValues: {
			name: '',
			birthYear: '',
			gender: '',
			height: '',
			skinColor: '',
			eyeColor: '',
			image: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			birthYear: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			gender: Yup.string()
				.max(6, 'Must be 6 characters or less')
				.required('Required'),
			height: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			skinColor: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			eyeColor: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			image: Yup.string()
				.max(100, 'Must be 100 characters or less')
				.required('Required'),
		}),
		onSubmit: async (values) => {
			console.log(values);
			const character = await actions.addCharacter(values.name, values.birthYear, values.gender, values.height, values.skinColor, values.eyeColor, values.image);
			console.log(character);
			if (!character.error) {
				Swal.fire({
					title: 'Success!',
					text: "Character successfully created",
					icon: 'success',
					timer: 2000
				})
				navigate("/")
			}
			else {
				Swal.fire({
					title: 'Error!',
					text: character.error,
					icon: 'error',
					confirmButtonText: 'OK',
				})
			}
		},
	});
	
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputName1" className="text-white form-label">Name</label>
					<input type="text" className="form-control" name="name" id="exampleInputName1" aria-describedby="nameHelp"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className="text-danger">{formik.errors.name}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputBirthYear1" className="text-white form-label">Birth year</label>
					<input type="text" className="form-control" name="birthYear" id="exampleInputBirthYear1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthYear}
					/>
					{formik.touched.birthYear && formik.errors.birthYear ? (
						<div className="text-danger">{formik.errors.birthYear}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputGender1" className="text-white form-label">Gender</label>
					<input type="text" className="form-control" name="gender" id="exampleInputGender1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender}
					/>
					{formik.touched.gender && formik.errors.gender ? (
						<div className="text-danger">{formik.errors.gender}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputHeight1" className="text-white form-label">height</label>
					<input type="text" className="form-control" name="height" id="exampleInputHeight1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.height}
					/>
					{formik.touched.height && formik.errors.height ? (
						<div className="text-danger">{formik.errors.height}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputSkinColor1" className="text-white form-label">Skin Color</label>
					<input type="text" className="form-control" name="skinColor" id="exampleInputSkinColor1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skinColor}
					/>
					{formik.touched.skinColor && formik.errors.skinColor ? (
						<div className="text-danger">{formik.errors.skinColor}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEyeColor1" className="text-white form-label">Eye Color</label>
					<input type="text" className="form-control" name="eyeColor" id="exampleInputEyeColor1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.eyeColor}
					/>
					{formik.touched.eyeColor && formik.errors.eyeColor ? (
						<div className="text-danger">{formik.errors.eyeColor}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputImage1" className="text-white form-label">Image URL</label>
					<input type="text" className="form-control" name="image" id="exampleInputImage1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.image}
					/>
					{formik.touched.image && formik.errors.image ? (
						<div className="text-danger">{formik.errors.image}</div>
					) : null}
				</div>
				<button type="submit" className="text-white btn btn-primary">Submit</button>
			</form>
		</div>
	);
}