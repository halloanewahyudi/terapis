export const useLayanan = () => {

  const layanan = [
    {
      id: 1,
      title: 'Full Body Massage',
      description: 'Memberikan rasa nyaman, membantu mengedurkan otot-otot tubuh yang tegang dan membantu memiliki kualitas tidur yang lebih baik.',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'60 Menit', harga:'Rp. 100.000'},
        {waktu:'90 Menit', harga:'Rp. 150.000'},
        {waktu:'120 Menit', harga:'Rp. 190.000'}
      ]
    },
    {
      id: 2,
      title: 'Refleksi',
      description: 'Pijat yang fokus pada titik saraf untuk melancarkan peredaran darah, menghilangkan rasa pegal dan lelah',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'60 Menit', harga:'Rp. 100.000'},
        {waktu:'90 Menit', harga:'Rp. 150.000'},
        {waktu:'120 Menit', harga:'Rp. 190.000'}
      ]
    },
    {
      id: 3,
      title: 'Full Body Massage & Totok Wajah',
      description: 'Selain memberikan rasa nyaman pada tubuh, juga dapat membantu merileksasi otot-otot wajah, sehingga wajah menjadi lebih kencang dan lebih mudah',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'90 Menit', harga:'Rp. 160.000'},
        {waktu:'120 Menit', harga:'Rp. 190.000'}
      ]
    },
    {
      id: 4,
      title: 'Full Body Massage & Refleksi',
      description: 'Perpaduan massage seluruh badan dan refleksi yang memberikan manfaat yang lebih banyak pada tubuh Anda.',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'90 Menit', harga:'Rp. 160.000'},
        {waktu:'120 Menit', harga:'Rp. 200.000'}
      ]
    },
    {
      id: 5,
      title: 'Full Body Massage & Kerokan',
      description: 'Membantu menyembuhkan masuk angin, sakit kepala dan pegal-pegal, juga memperbaiki metabolisme tubuh sehingga kembali rileks dan sehat.',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'90 Menit', harga:'Rp. 160.000'},
        {waktu:'120 Menit', harga:'Rp. 200.000'}
      ]
    },
    {
      id: 6,
      title: 'Full Body Massage & Bekam',
      description: 'Bekam dapat membantu melancarkan peredaran darah, mengurangi rasa sakit, meningkatkan imunitas dan membuat tubuh menjadi rileks.',
      photo: '/images/img-hero.jpg',
      price:[
        {waktu:'60 Menit', harga:'Rp. 245.000'},
        {waktu:'90 Menit', harga:'Rp. 280.000'},
        {waktu:'120 Menit', harga:'Rp. 310.000'}
      ]
    }
  ]
  return {layanan}
}
