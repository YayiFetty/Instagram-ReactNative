


// import { View, Text, Animated, Image } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';

// export default function Onboard() {
//   const fadeAnim1 = useRef(new Animated.Value(1)).current;
//   const fadeAnim2 = useRef(new Animated.Value(0)).current;
//   const fadeAnim3 = useRef(new Animated.Value(0)).current;

//   const iniColors=["#f9ce34", "#ee2a7b" ,"#6228d7"];
//   const midColors=['#D9D9D9', '#5355E1', '#A631BF', '#EE4B60'];
//   const [bgColors, setBgColors] = React.useState(iniColors);

//   const [final, setFinal] = useState(false)

//   const animateLogo = () => { Animated.sequence([
//     Animated.timing(fadeAnim1,{
//       toValue:0,
//       duration:2000,
//       useNativeDriver:true
//     }),
//     Animated.timing(fadeAnim2, {
//       toValue:1,
//       duration:2000,
//       useNativeDriver:true
//     }),
//     Animated.timing(fadeAnim2, {
//       toValue:0,
//       duration:2000,
//       useNativeDriver:true
//     }),
//     Animated.timing(fadeAnim3, {
//       toValue:1,
//       duration:2300,
//       useNativeDriver:true
//     }),
//   ]).start(
//       animateBg
//   );
// };

// const animateBg = () => {
//   setTimeout(() => {
//     setBgColors(midColors);
//     setTimeout(() => {
//       setBgColors(["#FFFFFF"]);
//       setFinal(true);

//     },2000)
//   }, 2000)
// }
//  useEffect(() => {
//   animateLogo();
//  },
//  [final])

//   return (
//     <>
//       {
//         final ? (
//          <View className=" flex-1 justify-center items-center bg-white">
//            <Animated.View className="items-center" >
//             <Animated.Image
//         style={[{ width:150,height:150, opacity:fadeAnim3}]}
//          source={require("../../../src/assets/images/logo3.png")}
//          resizeMode="contain"/>
//             <Animated.Text style={[{opacity:fadeAnim3, fontFamily:"Insta"}]}  className='text-center text-3xl my-4' >Instagram</Animated.Text>
//           </Animated.View>
//          </View>
//         ):(
//         <LinearGradient colors={bgColors}
//     start={{x:0, y:1}}
//     end={{x:0.2, y:-0.3}}
//     className=' flex-1 justify-center items-center '>
//         <Animated.Image
//         style={[{ position:"absolute", width:150,height:150, opacity:fadeAnim1}]}
//          source={require("../../../src/assets/images/logo1.png")}
//          resizeMode="contain"/>
//         <Animated.Image
//         style={[{position:"absolute", width:150,height:150, opacity:fadeAnim2}]}
//          source={require("../../../src/assets/images/logo2.png")}
//          resizeMode="contain"/>
//         <Animated.Image
//         style={[{position:"absolute", width:150,height:150, opacity:fadeAnim3}]}
//          source={require("../../../src/assets/images/logo3.png")}
//          resizeMode="contain"/>
//     </LinearGradient>)
//       }
//     </>
//   )
// }


import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Onboard() {
  // Opacity animations for logos
  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;

  // Additional animations for final screen
  const logoScaleAnim = useRef(new Animated.Value(1)).current;
  const textTranslateY = useRef(new Animated.Value(50)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  // Color configurations
  const COLOR_STAGES = {
    initial: ["#f9ce34", "#ee2a7b", "#6228d7"],
    mid: ['#D9D9D9', '#5355E1', '#A631BF', '#EE4B60'],
    final: ["#FFFFFF"]
  };

  const [bgColors, setBgColors] = useState(COLOR_STAGES.initial);
  const [final, setFinal] = useState(false);

  // Main logo animation sequence
  const animateLogo = () => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 2300,
        useNativeDriver: true
      }),
    ]).start(animateBackground);
  };

  // Background and final screen animation
  const animateBackground = () => {
    Animated.sequence([
      Animated.timing(logoScaleAnim, {
        toValue: 1.2,
        duration: 500,
        easing: Easing.elastic(1.2),
        useNativeDriver: true
      }),
      Animated.timing(logoScaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();

    const backgroundTransition = () => {
      setBgColors(COLOR_STAGES.mid);
      
      setTimeout(() => {
        setBgColors(COLOR_STAGES.final);
        setFinal(true);

        // Animate text and logo for final screen
        Animated.parallel([
          Animated.spring(textTranslateY, {
            toValue: 0,
            friction: 4,
            tension: 50,
            useNativeDriver: true
          }),
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true
          })
        ]).start();
      }, 2000);
    };

    setTimeout(backgroundTransition, 2000);
  };

  useEffect(() => {
    animateLogo();
  }, []);

  return (
    <>
      {final ? (
        <View className="flex-1 justify-center items-center bg-white">
          <Animated.View className="items-center">
            <Animated.Image
              style={[
                { 
                  width: 150, 
                  height: 150, 
                  opacity: fadeAnim3,
                  transform: [
                    { scale: logoScaleAnim },
                    { perspective: 1000 }
                  ]
                }
              ]}
              source={require("../../../src/assets/images/logo3.png")}
              resizeMode="contain"
            />
            <Animated.Text 
              style={[
                
                { 
                  transform: [{ translateY: textTranslateY }],
                  opacity: textOpacity,
                  fontFamily:"Insta",
                  textAlign:"center",
                  fontSize: 25,
                  marginTop:22,
                }
              ]}
              className="text-center text-3xl my-4 font-bold text-black"
            >
              Instagram
            </Animated.Text>
          </Animated.View>
        </View>
      ) : (
        <LinearGradient 
          colors={bgColors}
          start={{x:0, y:1}}
          end={{x:0.2, y:-0.3}}
          className='flex-1 justify-center items-center'
        >
          <Animated.Image
            style={[
              { 
                position: "absolute", 
                width: 150, 
                height: 150, 
                opacity: fadeAnim1
              }
            ]}
            source={require("../../../src/assets/images/logo1.png")}
            resizeMode="contain"
          />
          <Animated.Image
            style={[
              {
                position: "absolute", 
                width: 150, 
                height: 150, 
                opacity: fadeAnim2
              }
            ]}
            source={require("../../../src/assets/images/logo2.png")}
            resizeMode="contain"
          />
          <Animated.Image
            style={[
              {
                position: "absolute", 
                width: 150, 
                height: 150, 
                opacity: fadeAnim3
              }
            ]}
            source={require("../../../src/assets/images/logo3.png")}
            resizeMode="contain"
          />
        </LinearGradient>
      )}
    </>
  );
}