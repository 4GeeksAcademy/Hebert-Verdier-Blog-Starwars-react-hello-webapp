import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

export const AddPlanet = () => {
	const { store, actions } = useContext(Context);

	const formik = useFormik({
		initialValues: {
			name: '',
			climate: '',
			population: '',
			orbital_period: '',
			rotation_period: '',
			diameter: '',
			image: ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			climate: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			population: Yup.string()
				.max(10, 'Must be 10 characters or less')
				.required('Required'),
			orbital_period: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			rotation_period: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			diameter: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			image: Yup.string()
				.max(2000, 'Must be 2000 characters or less')
				.required('Required'),
		}),
		onSubmit: async (values) => {
			const planet = await actions.addPlanet(values.name, values.climate, values.population, values.orbital_period, values.rotation_period, values.diameter, values.image);
			if (!planet.error) {
				Swal.fire({
					title: 'Success!',
					text: "planet successfully created",
					icon: 'success',
					timer: 2000
				})
				navigate("/")
			}
			else {
				Swal.fire({
					title: 'Error!',
					text: planet.error,
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
					<label htmlFor="exampleInputClimate1" className="text-white form-label">Climate</label>
					<input type="text" className="form-control" name="climate" id="exampleInputClimate1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.climate}
					/>
					{formik.touched.climate && formik.errors.climate ? (
						<div className="text-danger">{formik.errors.climate}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPopulation1" className="text-white form-label">Population</label>
					<input type="text" className="form-control" name="population" id="exampleInputPopulation1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.population}
					/>
					{formik.touched.population && formik.errors.population ? (
						<div className="text-danger">{formik.errors.population}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputOrbitalPeriod1" className="text-white form-label">Orbital Period</label>
					<input type="text" className="form-control" name="orbital_period" id="exampleInputOrbitalPeriod1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.orbital_period}
					/>
					{formik.touched.orbital_period && formik.errors.orbital_period ? (
						<div className="text-danger">{formik.errors.orbital_period}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputRotationPeriod1" className="text-white form-label">Rotation Period</label>
					<input type="text" className="form-control" name="rotation_period" id="exampleInputRotationPeriod1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rotation_period}
					/>
					{formik.touched.rotation_period && formik.errors.rotation_period ? (
						<div className="text-danger">{formik.errors.rotation_period}</div>
					) : null}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputDiameter1" className="text-white form-label">Diameter</label>
					<input type="text" className="form-control" name="diameter" id="exampleInputDiameter1"
						onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.diameter}
					/>
					{formik.touched.diameter && formik.errors.diameter ? (
						<div className="text-danger">{formik.errors.diameter}</div>
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