import React, {useContext} from 'react';
import { Input , Button, Text } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext} from '../context/LocationContext'

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording, stopRecording, changeName} = useContext(LocationContext)
        console.log(locations.length)
    return (
        <>
        <Spacer><Text>{recording}sxxx</Text>
        <Input value={name} placeholder='Enter Name' onChangeText={changeName} />
        </Spacer>

        {recording ?  <Button title="Stop Record" onPress={stopRecording} /> : 
        <Button title="Start Record" onPress={startRecording} />
    }
        <Spacer />     
        </>
    )

}
export default TrackForm