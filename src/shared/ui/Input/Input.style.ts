import { COLORS, Radius } from '@shared/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	input: {
		backgroundColor: COLORS.violetDark,
		height: 58,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: 16,
		lineHeight: 1.6,
	},
})
