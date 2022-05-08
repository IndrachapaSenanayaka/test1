/*Reception staff regitration code*/

import React, { useState } from "react";
import axios from "axios";
import './form.css';
import Rec from '../../../images/rec.png'
import { toast } from "react-toastify";









export default function AddReceptionist() {

  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nic, setNic] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [pcode, setPcode] = useState("");
  const [img, setImg] = useState("");

  const changeOnclick = e => {
    e.preventDefault();


    const receptionist = new FormData();

    receptionist.append("gender", gender);
    receptionist.append("fname", fname);
    receptionist.append("lname", lname);
    receptionist.append("nic", nic);
    receptionist.append("qualifications", qualifications);
    receptionist.append("number", number);
    receptionist.append("email", email);
    receptionist.append("password", password);
    receptionist.append("province", province);
    receptionist.append("city", city);
    receptionist.append("street", street);
    receptionist.append("pcode", pcode);
    receptionist.append("img", img);



    axios
      .post("http://localhost:8070/receptionist/addRec", receptionist)
      .then(res => {
        toast.success("staff member successfully added!", {
          position: toast.POSITION.TOP_CENTER
        });
        setGender("");
        setFname("");
        setLname("");
        setNic("");
        setQualifications("");
        setNumber("");
        setEmail("");
        setPassword("");
        setProvince("");
        setCity("");
        setStreet("");
        setPcode("");
        setImg("");
      })
      .catch(err => {
        console.log(err);


      });
  };
  return (
    <div className="grid-container">
      <div className="left-4">
        <img className="DocImg" src={Rec} alt="DocImg" />
      </div>
      <div className="grid-item-4 item-1">
        <div className="scroll-item-1">
          <div className="form-group mb-3">
            <form encType="multipart/form-data" name="form1" onSubmit={changeOnclick} className="was-validated" role="form" style={{ padding: "20px 80px 0px 80px;" }} >
              <center><h1> Receptionist Staff Registration</h1> </center>
              <ul className="form-style-1">

                <div className="Form-group">
                  <label className="form-label" >Select Title <span className="required" value={gender}>*</span></label>
                  <select name="field4" className="form-control" rows="4" value={gender} onChange={e => setGender(e.target.value)} required>
                    <option value="" selected disabled>--Select Title--</option>
                    <option value="mr">Mr.</option>
                    <option value="miss">Miss</option>
                    <option value="mrs">Mrs</option>
                  </select>
                  <div className="invalid-feedback">A required field.</div>

                </div>
                <br />
                <div className="form-group">
                  <label className="form-label">First Name <span className="required">*</span></label>
                  <input type="text" name="field1" className="form-control" autoComplete="off" value={fname} placeholder="Enter fisrt name" onChange={(e) => { setFname(e.target.value) }} required />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div> <br />

                <div className="form-group">
                  <label className="form-label">Last Name <span className="required">*</span></label>
                  <input type="text" name="field2" className="form-control" autoComplete="off" value={lname} placeholder="Enter last name" onChange={(e) => { setLname(e.target.value) }} required />
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <br />

                <div className="form-group">
                  <label className="form-label">NIC Number <span className="required">*</span></label>
                  <input type="text" name="field3" className="form-control" autoComplete="off" value={nic} pattern="[0-9]{12}" placeholder="Enter NIC number" onChange={(e) => { setNic(e.target.value) }} required />
                  <div className="invalid-feedback">Please fill out this field in the format example:199087657790.</div>
                </div>
                <br />





                <div className="Form-group">
                  <label className="form-label" >Select Qualifications <span className="required" value={qualifications}>*</span></label>
                  <select name="field4" className="form-control" rows="5" value={qualifications} onChange={e => setQualifications(e.target.value)} required>
                    <option value="" selected disabled>--Select Qualifications--</option>
                    <option value="A/L">A/L</option>
                    <option value="Under-Graduate">Under-Graduate</option>
                    <option value="Post-Graduate">Post-Graduate</option>
                    <option value="Masters">Masters</option>
                  </select>
                  <div className="invalid-feedback">Please make a selection.</div>
                </div>
                <br />

                <div className="form-group">
                  <label className="form-label" >Phone Number<span className="required">*</span></label>
                  <input type="text" name="field5" className="form-control" autoComplete="off" value={number} pattern="[947][0-9]{10}" placeholder="Enter phone number" onChange={(e) => { setNumber(e.target.value) }} required />
                  <div className="invalid-feedback">Please fill out this field in the format example:94788098760.</div>
                </div>
                <br />

                <div className="form-group">
                  <label className="form-label" for="inputEmail">E-mail <span className="required">*</span></label>
                  <input type="email" name="field6" id="inputEmail" className="form-control" autoComplete="off" value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Enter E-mail" onChange={(e) => { setEmail(e.target.value) }} required />
                  <div className="invalid-feedback">Please enter email address in the format example:someone@example.com.</div>
                </div>
                <br />

                <div className="form-group">
                  <label className="form-label">Password <span className="required">*</span></label>
                  <input type="password" name="field7" className="form-control" autoComplete="off" value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" placeholder="Set password " onChange={(e) => { setPassword(e.target.value) }} required />
                  <div className="invalid-feedback">Please enter password(include symbols,numbers,uppercase and lowercase letters.Password cannot be less than 8 characters. </div>
                </div>
                <br />

                <div class="card2">
                  <div className="form-group">
                    <label className="form-label">Province <span className="required">*</span></label>
                    <input type="text" name="field8" className="form-control" autoComplete="off" value={province} placeholder="Enter province" onChange={(e) => { setProvince(e.target.value) }} required />
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                  <br />

                  <div className="form-group">
                    <label className="form-label">City <span className="required">*</span></label>
                    <input type="text" name="field9" className="form-control" autoComplete="off" value={city} placeholder="Enter city" onChange={(e) => { setCity(e.target.value) }} required />
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                  <br />

                  <div className="form-group">
                    <label className="form-label">Street <span className="required">*</span></label>
                    <input type="text" name="field9" className="form-control" autoComplete="off" value={street} placeholder="Enter your street" onChange={(e) => { setStreet(e.target.value) }} required />
                    <div className="invalid-feedback">Please fill out this field.</div>

                  </div>
                  <br />

                  <div className="form-group">
                    <label className="form-label">Postal Code<span className="required">*</span></label>
                    <input type="text" name="field10" pattern="[0-9]{5}" className="form-control" autoComplete="off" value={pcode} placeholder="Enter postal code" onChange={(e) => { setPcode(e.target.value) }} required />
                    <div className="invalid-feedback">Please fill out this field in the format example:60000.</div>
                  </div>
                </div>
                <br />


                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Upload Image <span className="required">*</span></label>
                  <input type="file" filename="img" className="form-control" id="exampleFormControlInput1"
                    onChange={(e) => { setImg(e.target.files[0]) }} required />
                  <div className="invalid-feedback">Please upload an image.</div>
                </div>
                <br />


                <br />
                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="button-71" role="button"><i className="fa fa-user-plus"></i> Add Staff</button>
                  <button type="reset" className="button-71" ><i className="fa fa-trash"></i>Clear </button>
                </div>

              </ul>

            </form>
          </div>
        </div>
      </div>
    </div>


  );
}

