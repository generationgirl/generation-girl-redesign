import firebase from './firebase'

const mediumSourceBaseUrl = "https://us-central1-generation-girl.cloudfunctions.net/app/medium"
const database = firebase.database();
const rootRef = database.ref();
const eventsRef = rootRef.child('events');
const membersRef = rootRef.child('members');
const sponsorsRef = rootRef.child('sponsors');

async function getEvents() {
    const snapshot = await eventsRef.limitToFirst(10).once('value');
    return snapshot.val();
}

async function getMembers() {
    const snapshot = await membersRef.limitToFirst(10).once('value');
    return snapshot.val();
}

async function getSponsors() {
    const snapshot = await sponsorsRef.limitToFirst(10).once('value');
    return snapshot.val();
}

async function getPosts(username) {
  
  const mediumURL = `${mediumSourceBaseUrl}?username=@${username}`;
  const response = await fetch(mediumURL);
  const json = await response.json();
  const postsJSON = json.payload.references.Post
  const posts = Object.values(postsJSON).map(({ id, title, virtuals, uniqueSluq }) => {
    return {
      id,
      title,
      subtitle: virtuals.subtitle,
      image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
      url: `https://medium.com/@${username}/${uniqueSluq}`
    }
  });
  console.log(posts);
  return posts;
}

export { getEvents, getMembers, getSponsors, getPosts }