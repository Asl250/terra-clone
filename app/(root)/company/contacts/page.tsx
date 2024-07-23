"use client"

import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect, useRef } from 'react'

const Contact = () => {
	const mapRef = React.useRef<HTMLDivElement>(null)
	
	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string || 'AIzaSyB04ROLvuuXuaaqE-WKs4f3B2hcC2l0L6g',
				version: 'quartely',
			})
			const { Map } = await loader.importLibrary('maps')
			const locationMap = {
				lat: 42.3775,
				lng: 64.5853,
			}
			// MARKER
			const { Marker } = (await loader.importLibrary("marker")) as google.maps.MarkerLibrary
			
			const options :google.maps.MapOptions = {
				center: locationMap,
				zoom: 5,
				mapId: "NEXT_MAPS"
			}
			const map = new Map(mapRef.current as HTMLDivElement, options)
			
			// 	add the marker in the map
			const marker = new Marker({
				map: map,
				position: locationMap
			})
		}
		
		initializeMap()
	}, [])
	
	return (
		<div ref={mapRef} className={'h-[500px] my-10'}>
			Stors
		</div>
	)
}
export default Contact
