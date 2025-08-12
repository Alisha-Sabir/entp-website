import TeamComponent from "./TeamComponent";
import relationshipManager from "@/data/relationshipManager";

export default function RelationshipManager() {
  return (
    <>
      <TeamComponent
        // backgroundColor="white"
        heading={relationshipManager.heading}
        subHeading={
          <h5
            dangerouslySetInnerHTML={{
              __html: relationshipManager.subHeading,
            }}
          />
        }
        members={relationshipManager.managers.map((manager) => ({
          memberName: manager.managerName,
          memberQualities: manager.qualities,
          imgAlt: manager.managerName,
          image: manager.image,
          id: manager.id,
        }))}
      />
    </>
  );
}
