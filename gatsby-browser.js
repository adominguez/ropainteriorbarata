export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `Esta aplicación ha sido actualizada. ` +
        `Recarga para ver una versión actualizada`
    )
    if (answer === true) {
      window.location.reload()
    }
}