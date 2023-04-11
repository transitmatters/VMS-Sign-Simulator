# About #
![image](https://user-images.githubusercontent.com/50958520/231030824-21527ff0-4d1c-4100-8a60-d7a68ca7d392.png)
Simulates MBTA VMS signs visually.

# Usage #

Works as a react component
```ts
// Can be used like a standard MBTA Sign, with two destinations, two countdown times, and a clock
<VMSSign dest1="Frst Hills" dest2="Oak Grove" time1="4 min" time2="11 min" clock="4:38" scale={1}/>

// Or if "text" is specified, it overrides it. Max 48 characters. (Multi-page messages later?)
<VMSSign text="This is a test. Will    this work, Let us see." scale={3}/>
```

# Dependencies #
Node.js 18.x.x

React 18.x.x

Typescript 5.x.x

## Script Dependencies ##

Python 3
