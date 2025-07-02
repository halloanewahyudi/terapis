export const useFeatures = () => {
  const features = [
    {
      title: 'Terapis Berpengalaman',
      description: 'Terapis kami adalah profesional terlatih yang siap memberikan pijatan yang tepat sesuai kebutuhan Anda.',
      icon: defineAsyncComponent(() => import('~/components/icons/users.vue'))
    },
    {
      title: 'Beragam Jenis Pijat',
      description: 'Dari pijat relaksasi, pijat refleksi, hingga terapi pijat untuk mengatasi nyeri otot.',
      icon: defineAsyncComponent(() => import('~/components/icons/pijat.vue'))
    },
    {
      title: 'Fleksibel & Praktis ',
      description: 'Dengan jadwal yang fleksibel, Anda dapat menentukan waktu dan lokasi pijatan sesuai kebutuhan Anda.',
      icon: defineAsyncComponent(() => import('~/components/icons/calendar.vue'))
    },
    {
      title: 'Aman & Higienis ',
      description: 'Kami memastikan protokol kesehatan dan kebersihan terjaga dalam setiap sesi.',
      icon: defineAsyncComponent(() => import('~/components/icons/higienis.vue'))
    }
  ]
  return { features }
}
