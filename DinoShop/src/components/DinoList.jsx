import DinoItem from "./DinoItem";

const DinoList = ({ dinos = [], deleteDino }) => {
  return (
    <div className="dino-list">
      {dinos.length === 0 ? (
        <h2>Nincs megjeleníthető dínó</h2>
      ) : (
        dinos.map((dino) => (
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