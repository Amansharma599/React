import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type ==="checkbox" ? checked : value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the formData");
    console.log(formData);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label> <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aman"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="lastName">Last Name</label> <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sharma"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="email">Email Address</label> <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="abcd@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />{" "}
        <br />
        <label htmlFor="email">Country</label> <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>Russia</option>
          <option>America</option>
          <option>Japan</option>
        </select>
        <br />
        <label htmlFor="streetAddress">Street Address</label> <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-20,5C,"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="city">City</label> <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Pune"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor=" state">State / Province</label> <br />
        <input
          type="state"
          name="state"
          id="state"
          placeholder="Madhya-Pradesh"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="postalCode">Zip/Postel-Code</label> <br />
        <input
          type="postalCode"
          name="postalCode"
          id=" state"
          placeholder="474001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <div className="flex ">
            <input
              name="comments"
              id="comments"
              type="checkbox"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              name="candidate"
              id="candidate"
              type="checkbox"
              value={formData.candidate}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidate">Candidate</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              name=" offers"
              id=" offers"
              type="checkbox"
              value={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor=" offers">Offer</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile Phone</p>

          <input
            type="radio"
            id="pushNotification"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushNotification">Everything</label> <br/>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          /> 
          <label htmlFor="pushEmail">Same as email</label> <br/>

          <input
            type="radio"
            id="pushNoting"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}
          /> 
          <label htmlFor="pushNoting">No Push Notification</label> 
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 ">Save</button>
      </form>
    </div>
  );
}

export default App;
