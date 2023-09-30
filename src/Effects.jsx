import { useLoader } from '@react-three/fiber'
import { LUTCubeLoader } from 'postprocessing'
import { EffectComposer, LUT } from '@react-three/postprocessing'
import { useControls } from 'leva';


function Effects(){
    const { selectedCube } = useControls({
        selectedCube: {
          options: ['BlueHour.cube', 'OrangeAndBlue.cube', 'Icecube.cube','Oana.cube','Sepia.cube','Tierra.cube','Wenders.cube'],
          value: 'BlueHour.cube',
        },
      });
    
      const texture = useLoader(LUTCubeLoader, `./luts/${selectedCube}`)

      return( <EffectComposer> 
        <LUT
          attach="lut"
          lut={texture}
          />   
            </EffectComposer>)
}

export default Effects;