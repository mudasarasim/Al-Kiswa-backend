const amadeus = require('../Config/amadeus');

// City-to-IATA Code Map
const cityToIATACode = {
  dubai: 'DXB',                // Dubai International
  abu_dhabi: 'AUH',            // Abu Dhabi International
  sharjah: 'SHJ',              // Sharjah International
  al_ain: 'AAN',               // Al Ain International
  ras_al_khaimah: 'RKT',       // Ras Al Khaimah International
  fujairah: 'FJR',             // Fujairah International
  ajman: 'DXB',                // Closest to Dubai
  umm_al_quwain: 'SHJ',        // Closest to Sharjah
  dibba: 'RKT',                // Closest to RAK
  hatta: 'DXB',                // Closest to Dubai
  kalba: 'SHJ',                // Closest to Sharjah
  khorfakkan: 'SHJ',           // Closest to Sharjah
};

exports.searchFlights = async (req, res) => {
  try {
    const {
      from = '',
      to = '',
      departureDate,
      returnDate,
      adults = 1,
    } = req.query;

    const originLocationCode =
      cityToIATACode[from.trim().toLowerCase()] || from.trim().toUpperCase();
    const destinationLocationCode =
      cityToIATACode[to.trim().toLowerCase()] || to.trim().toUpperCase();

    // ✅ Validate essential input
    if (!originLocationCode || originLocationCode.length !== 3) {
  return res.status(400).json({ error: `Invalid origin IATA code for: ${from}` });
}
if (!destinationLocationCode || destinationLocationCode.length !== 3) {
  return res.status(400).json({ error: `Invalid destination IATA code for: ${to}` });
}


    // 🔍 Amadeus Flight Search
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      ...(returnDate && { returnDate }),
      adults: Number(adults),
      travelClass: 'ECONOMY',
      currencyCode: 'AED',
      max: 10,
    });

    const flights = response.data;

    if (!flights || flights.length === 0) {
      return res.status(200).json([]); // No flights found
    }

    res.json(flights);
  } catch (error) {
    console.error('❌ Flight search error:', error.response?.data || error.message || error);
    res.status(500).json({
      error: 'Failed to fetch flights',
      detail: error.response?.data || error.message,
    });
  }
};
