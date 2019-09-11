import  {useState, useEffect} from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
const [subscriber, setSubscriber] = useState(null)
const [err, setErr] = useState(null)
const startWatching = async() => {
    try{
        await requestPermissionsAsync();
        const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //1 second,
            distanceInterval: 10, //10 meters
        }, callback)
        setSubscriber(sub)
    }catch(e){
        setErr(e)
    }
}
 
 
useEffect(
   () => {
    if (shouldTrack){

        startWatching()
    }   else {
        subscriber.remove();
        setSubscriber(null);
    }

}
, [shouldTrack])

return [err]
}