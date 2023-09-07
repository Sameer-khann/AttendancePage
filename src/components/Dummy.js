const SubjectButtons = () => {
  return (
    <div className="attenSubButton">
      {subjects.map((subject, index) => (
        subject.name ? (
          <button
            className="btnn"
            key={index}
            onClick={() => {
              setInc(subject.present);
              setdec(subject.absent);
              setSubject(subject.name);
              setVal(subject.value);
              setSubID(subject.value);
              setIsSubjectSelected(true); // Set to true when a subject is clicked
              setSelectedSubject(subject.value);
              console.log("This subject is", subject.name);
            }}
          >
            {subject.name}
          </button>
        ) : null
      ))}
    </div>
  );
};
