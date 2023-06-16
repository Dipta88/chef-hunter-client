import React from 'react';

const Section2 = () => {
    return (
<div> <h1 className="text-5xl font-bold text-center mt-20">Special Offer Ends In :</h1>
        <div className="text-center flex justify-center mt-10 mb-20">
 
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl mx-auto">
        <span style={{ "--value": 15 }}></span>
      </span>
      days
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 10 }}></span>
      </span>
      hours
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 24 }}></span>
      </span>
      min
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 48 }}></span>
      </span>
      sec
    </div>
  </div>
</div>
</div>

    );
};

export default Section2;