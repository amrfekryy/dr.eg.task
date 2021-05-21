import { BackToHome } from "../App";

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/
const ChallengeThree = () => {
  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-white">Challenge 3</h1>
      <h2 className="subtitle has-text-grey-lighter">
        Fetch 100 users from the same api as before, and visualize their
        distribution by <code>age</code>, <code>gender</code>,
        <code>country</code>, and <code>registration date</code>.
      </h2>

      {/* Insert your data visualizations here */}
    </>
  );
};

export default ChallengeThree;
