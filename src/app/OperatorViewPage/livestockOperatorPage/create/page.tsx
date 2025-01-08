"use client";

import React from 'react';
import useFetch from '@/hooks/useFetch';
import { Livestock } from '@/models/LivestockModel';

const LivestockPage: React.FC = () => {
    const { data, loading, error } = useFetch<Livestock[]>(
        `${process.env.NEXT_PUBLIC_API_HOST}/livestock/get-all-livestocks/`,
        undefined
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No livestock data available.</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Livestock Information</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {data.map((livestock) => (
                    <div
                        key={livestock.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '10px',
                            width: '300px',
                        }}
                    >
                        <img
                            src={livestock.photo_url}
                            alt={livestock.name_id}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <h2>{livestock.name_id}</h2>
                        <p><strong>Gender:</strong> {livestock.gender}</p>
                        <p><strong>DOB:</strong> {livestock.dob}</p>
                        <p><strong>Weight:</strong> {livestock.weight} kg</p>
                        <p><strong>Phase:</strong> {livestock.phase}</p>
                        <p><strong>Grade:</strong> {livestock.grade}</p>
                        <p><strong>Breed ID:</strong> {livestock.breed_id}</p>
                        <p><strong>Type ID:</strong> {livestock.type_id}</p>
                        <p><strong>Farm ID:</strong> {livestock.farm_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LivestockPage