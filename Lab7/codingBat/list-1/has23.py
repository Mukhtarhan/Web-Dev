# %%
import folium

mapObj = folium.Map(location=[43.238949,76.889709], zoom_start=11, zoom_control=False)

folium.TileLayer("stamenterrain", attr='stamenterrain').add_to(mapObj)

folium.LayerControl().add_to(mapObj)
mapObj

# %%
