import { Button, Image, Text, View } from 'react-native'
import { Input } from '../../../shared/ui'
import { styles } from './Form.styles'
export const Form = () => {
	return (
		<View style={styles.content}>
			<Text>
				<Image
					source={require('@/assets/logo.png')}
					style={styles.logo}
					resizeMode='contain'
				/>
			</Text>
			<View style={styles.form}>
				<Input placeholder='email' />

				<Input placeholder='password' />
				<Button title='Войти' />
			</View>
			<Text>Восстановить пароль</Text>
		</View>
	)
}
