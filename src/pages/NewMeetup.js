import NewMeetForm from "../components/meetups/NewMeetForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-519f0-default-rtdb.firebaseio.com/meetups.json",
      { method: "POST", body: JSON.stringify(meetupData) }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
