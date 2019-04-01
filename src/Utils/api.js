import firebase from './firebase'


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

export { getEvents, getMembers, getSponsors }