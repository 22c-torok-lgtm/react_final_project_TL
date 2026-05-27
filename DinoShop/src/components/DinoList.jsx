import DinoItem from "./DinoItem";

const DinoList = ({ Dinos = [], deleteDino }) => {
  return (
    <div className="dino-list">
      {Dinos.length === 0 ? (
        <h2>Nincs megjeleníthető dínó</h2>
      ) : (
        Dinos.map((dino) => (
          <DinoItem
            key={dino.id}
            dino={dino}
            deleteDino={deleteDino}
          />
        ))
      )}
    </div>
  );
};

export default DinoList;