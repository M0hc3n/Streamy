### Streamy

Streamy is a simple streaming platform built using Video SDK. It supports both hosting and viewing modes, and can handle multi-hosts in a single stream.

#### Tour:

##### 1- Welcome Form:
In this view, the user can host a stream or join an existing one (by entering its ID). He can also set a Display Name to himself (Otherwise, a random one would be granted to him)
<img width="794" alt="Screenshot 2024-07-16 003441" src="https://github.com/user-attachments/assets/ab624b34-ebb5-427c-abee-92cf05ffe579">

##### 2- Stream Preparation:
Here, the user can access the meet ID and share it with other hosts or viewers (to allow them to join the stream).
<img width="637" alt="Screenshot 2024-07-16 003502" src="https://github.com/user-attachments/assets/07ec6523-439e-43d4-93e8-a873d2ba0b80">

##### 3- Host View:
In this view, any host can manage the stream (by starting or pausing it), or his hardware resources (camera, microphone)
<img width="907" alt="Screenshot 2024-07-16 003635" src="https://github.com/user-attachments/assets/4d66edcf-5485-4e00-a293-6639197558d8">

##### 4- Viewer Form:
The viewer view is basic, he would only need to watch the stream
<img width="761" alt="Screenshot 2024-07-16 003856" src="https://github.com/user-attachments/assets/76748bff-d850-4efe-93b2-dee2c8fe4c73">


#### Contribution:
 run: <br>
 ```git clone https://github.com/Mohcen2311/Memory-Game-Front-End.git``` <br>
```cd Streamy``` <br>
```npm install``` <br>
```npm run dev``` <br>
- Make sure to change the **apiToken** in ```/src/api/index.js``` to your token (from Video SDK Dashboard)


#### Future:
I was thinking to get in-depth in Video SDK and implement some cool features (such as chatting....) 
