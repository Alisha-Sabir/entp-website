import DetailsComponent from "./DetailsComponent";

const AccountManagement = () => {
  const data = [
    {
      id: 1,
      li: "Role-Based Access (Viewer, Maker, Approver)",
      subText:
        "Assign specific roles such as Viewer, Maker, or Approver to team members, ensuring controlled and secure access to critical financial operations.",
    },
    {
      id: 2,
      li: "Audit Trail & Security",
      subText:
        "Maintain a complete audit trail of all activities, ensuring full transparency and robust security for every transaction and decision made.",
    },
    {
      id: 3,
      li: "Team Collaboration",
      subText:
        "Facilitate seamless teamwork with tools that allow multiple users to collaborate efficiently within the platform, improving workflow and productivity.",
    },
    {
      id: 4,
      li: "Multilingual Support / Relationship Managers",
      subText:
        "Benefit from multilingual support and dedicated Relationship Managers, ensuring personalized assistance in your preferred language for smoother communication.",
    },
  ];
  return (
    <DetailsComponent
      sectionHeading="Account Management"
      data={data}
      background={"bg-white"}
      img="/images/management.png"
      imgAlt="Account Management"
      btn={true}
    />
  );
};

export default AccountManagement;
