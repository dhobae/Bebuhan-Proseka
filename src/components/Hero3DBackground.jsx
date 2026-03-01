import { useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'

function FloatingNotes() {
    const group = useRef()

    useFrame((state) => {
        group.current.rotation.y = state.clock.elapsedTime * 0.05
        group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
    })

    const shapes = []
    const count = 40
    const colors = ['#00E8FF', '#FF3B8A', '#BA55D3', '#FFB800', '#33CCBB', '#ffffff']

    for (let i = 0; i < count; i++) {
        const type = Math.floor(Math.random() * 4)
        const position = [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 2
        ]
        const rotation = [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        const size = Math.random() * 0.5 + 0.1

        const speed = Math.random() * 2 + 1
        const floatIntensity = Math.random() * 2 + 1
        const rotationIntensity = Math.random() * 2 + 1

        let geometry
        if (type === 0) {
            geometry = <ringGeometry args={[size * 0.8, size, 32]} />
        } else if (type === 1) {
            geometry = <ringGeometry args={[size * 0.8, size, 3]} /> // Triangle
        } else if (type === 2) {
            geometry = <planeGeometry args={[size, size / 4]} /> // Cross part 1
        } else {
            geometry = <circleGeometry args={[size * 0.5, 32]} />
        }

        shapes.push(
            <Float key={i} speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
                <mesh position={position} rotation={rotation}>
                    {geometry}
                    <meshBasicMaterial
                        color={color}
                        transparent
                        opacity={Math.random() * 0.5 + 0.3}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
                {type === 2 && (
                    <mesh position={position} rotation={[rotation[0], rotation[1], rotation[2] + Math.PI / 2]}>
                        <planeGeometry args={[size, size / 4]} />
                        <meshBasicMaterial
                            color={color}
                            transparent
                            opacity={Math.random() * 0.5 + 0.3}
                            side={THREE.DoubleSide}
                            blending={THREE.AdditiveBlending}
                        />
                    </mesh>
                )}
            </Float>
        )
    }

    return (
        <group ref={group}>
            {shapes}
            <Stars radius={10} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />
        </group>
    )
}

export default function Hero3DBackground() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <FloatingNotes />
        </Canvas>
    )
}
