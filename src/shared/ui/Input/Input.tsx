import { TextInput, TextInputProps, View } from 'react-native'
import { COLORS } from '../../tokens'
import { styles } from './Input.style'

export const Input = (props: TextInputProps) => {
	return (
		<View>
			<TextInput
				{...props}
				style={styles.input}
				placeholderTextColor={COLORS.gray}
			/>
		</View>
	)
}
