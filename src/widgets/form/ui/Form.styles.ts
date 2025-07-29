import { GAPS } from '@shared/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
		gap: GAPS.g50,
		width: 320,
	},

	form: {
		alignSelf: 'stretch',
		gap: GAPS.g16,
	},
	logo: {
		width: 220,
	},
})
