import React from 'react'
import { Grid } from '@react-three/drei'
import { useControls } from 'leva'

export default function CustomGrid() {
    {/* 
    const {
        gridSize,
        cellSize,
        cellThickness,
        cellColor,
        sectionSize,
        sectionThickness,
        sectionColor,
        fadeDistance,
        fadeStrength,
        infiniteGrid} = useControls({
        
        gridSize: [10.5, 10.5],
        cellSize: 1,
        cellThickness: 1,
        cellColor: 'black',
        sectionSize: 1.5,
        sectionThickness: 3,
        sectionColor: 'red',
        fadeDistance: 60,
        fadeStrength: 1.0,
        infiniteGrid: true
    })
    */}

    return (
        <Grid 
            args={[10.5, 10.5]} 
            cellSize={0.5} 
            cellThickness={1.5} 
            cellColor={'#A3B18A'} 
            sectionSize={1.5} 
            sectionThickness={3.0} 
            sectionColor={'#344e41'} 
            fadeDistance={25} 
            fadeStrength={1.0} 
            infiniteGrid={true}
        >
        </Grid>
    )
}
