const { getBansheeInventory } = require ("../util/get-banshee-inventory.js")
const { getValidAuth } = require("../util/get-valid-auth.js")
const { name, version } = require("../../package.json")

module.exports = async (api) => {
  // eslint-disable-next-line no-unused-vars
  api.get("/mods", async (request, response) => {
    console.log("/mods called")
    response.header("Access-Control-Allow-Origin", "*")

    const { auth, isTokenRefreshNeeded, lastTokenRefresh } = await getValidAuth()
    const {
      inventory,
      lastUpdated,
      authRetries,
      manifestRetries,
      usedCachedData,
      inventoryItemDefinitionEndpoint
    } = await getBansheeInventory(auth)

    const result = {
      inventory,
      metadata: {
        name,
        version,
        now: new Date().toISOString(),
        lastUpdated,
        lastTokenRefresh,
        usedCachedAuth: !isTokenRefreshNeeded,
        usedCachedData,
        authRetries,
        manifestRetries,
        inventoryItemDefinitionEndpoint
      }
    }

    console.log(`Completing request:\n${JSON.stringify(result, null, "  ")}`)
    return JSON.stringify(result, null, "  ")
  })
}
