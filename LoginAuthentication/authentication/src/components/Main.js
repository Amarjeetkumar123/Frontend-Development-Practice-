import React from 'react'

const Main = (props) => {
   const setLoginUser = props.setLoginUser;
  return (
    <div class="card w-50 mx-auto mt-5 text-white bg-dark py-5">
      <div class="card-body text-center my-5">
        <h5 class="card-title pt-3 lh-base">Welcome To Home Page</h5>
        <p class="card-text pb-5">
          You can only see this page when you are logged in{" "}
        </p>
        <button
          className="btn btn-outline-danger mt-5"
          onClick={() => setLoginUser({})}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Main