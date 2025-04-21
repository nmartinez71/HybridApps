



export default function ConfirmationModal(props) {
      return (
        <Modal {...props}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInner}>
              <Text style={styles.modalText}>Dude,
                srsly?</Text>
              <Text style={styles.modalButton}
                onPress={props.onPressConfirm}>
                Yep
              </Text>
              <Text style={styles.modalButton}
                onPress={props.onPressCancel}>
                Nope
              </Text>
            </View>
          </View>
        </Modal>
      );
    }
    ConfirmationModal.defaultProps = {
      transparent: true,
      onRequestClose: () => {},
    };