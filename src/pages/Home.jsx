import { useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState([]);

  let companies = [
    {
      name: "company A",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation", "Plumbing", "Electrica"],
    },
    {
      name: "company B",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation"],
    },
    {
      name: "company C",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation", "Plumbing"],
    },
  ];

  const submit = (e) => {
    e.preventDefault();
    alert("formSubmit");
  };
  const CheckBox = (e) => {
    console.log(e);
    e.target.checked == true
      ? setSpeciality([...speciality, e.target.value])
      : setSpeciality((prev) => {
          console.log("inside", prev);
          // prev.filter((item) => item != e.target.value);
        });
  };
  console.log(name, speciality);

  return (
    <>
      <h1 className="text-xl font-bold text-center">
        Company list are following:
      </h1>

      {/* Search & Fileter form */}

      <div className="flex justify-center mt-5">
        <div>
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Name"
              className="h-8"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="bg-indigo-700 text-slate-100 px-3 py-1 ml-3">
              Searh
            </button>
            <div>
              <p className="mt-2 font-bold text-center mb-1 text-lg">
                Specialties
              </p>
              <div>
                {companies[0].Specialties.map((item, index) => (
                  <div key={index} className="inline">
                    <input
                      type="checkbox"
                      className="border-indigo-700 border-2text-black focus:border-indigo-300 ring-transparent"
                      value={item}
                      key={index}
                      onChange={CheckBox}
                    />
                    <span className="ml-2 mr-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-zinc-200 flex justify-center gap-4 mt-6">
        {companies.length &&
          companies.map(({ name, logo, Specialties }, index) => (
            <div
              className="mb-6 shadow-xl w-52 mt-6 p-5 rounded-md bg-indigo-200"
              key={index}
            >
              <img
                src={logo}
                alt="img"
                width="100"
                height="100"
                className="mx-auto mb-4"
              />
              <p className="text-center font-bold">{index + 1}</p>
              <span className="font-bold"> Name:</span> {name}
              <p>
                {" "}
                <span className="font-bold"> Specialties:</span>
              </p>
              {Specialties.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};
