import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { IMenuItem, TypeNavigate } from './menu.interface'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable
			className='items-center w-[20%]'
			onPress={() => nav(item.path)}
		>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? '#47AA52' : '#374151'}
			/>
			<Text>{item.path}</Text>
		</Pressable>
	)
}
export default MenuItem